# vue-mixins

A small collection of methods and filters that I created when the need arose and I couldn't find something in someone else's library.

### Usage

I could probably learn how to make this a plugin. But for now it's a tiny project with no users, making it not worth the effort.

Pull the mixins into your location of choice.

These examples expect it to be at the root of the project along with the main.js etc.

#### In component

Lets say you want a method that can tell you if the value of any given array is Truthy.  

[Demo of arrayIsTruthy](https://codepen.io/shanemgrey/pen/zPqpEr)

```
<template lang="html">
  {{ arrayIsTruthy(myArray) }}
</template>
<script>
import {arrayIsTruthy} from '@/mixins/arrayIsTruthy'

export default {
  data () {
    return {
      myArray: []
    }
  },
  mixins: [arrayIsTruthy],
  ...
}
```


#### Globally for the Vue instance

*Use this carefully as it makes things happen globally. Like don't name a method some common word and then have it do crazy stuff...*

Maybe you want to pass in an array of items to be rendered, like in a table. But many items need some kind of filter to format them reasonably.  

Which would you rather see?

2017-11-04

or

2017-11-04T14:09:47.371334Z

In that same data set you might be getting things that need to be capitalized, truncated, whatever.  You don't know what's going to be in the data at which positions and would like a dynamic functionality to deal with formatting.

```
// main.js
...

import {formatDateTime} from '@/mixins/formatDateTime'
import {dynamicFilter} from '@/mixins/dynamicFilter'

Vue.mixin(formatDateTime) // Requires 'date-fns/format' in project
Vue.mixin(capitalize)
Vue.mixin(truncate)
Vue.mixin(dynamicFilter)
```

That filter and the method that might call on it is now available to all components in the instance.

```
// myComponent.vue
<template lang="html">
  <div v-for="item in dynObjects">
    <p><strong>{{ item.filter | capitalize }}:</strong> {{ dynamicFilter(item.value, item.filter) }}</p>
    </div>
</template>

<script>
  export default {
    data () {
      return {
        dynObjects: [
      {
        value: 'should be capitalized',
        filter: 'capitalize'
      },
      {
        value: 'this is way too long to be in the place it should go and should be truncated',
        filter: 'truncate'
      },
      {
        value: '2017-11-04T14:09:47.371334Z',
        filter: 'formatDateTime'
      },
     ]
      }
    },
  }
</script>
```

Note the lack of having to define the filters or the method.

keep in mind that this would be silly to use on static data as presented here. But if you were pulling from an API where you know the type of data coming in any particular field, and also know it needs formatting sometimes, you can add a filter property to each item in the array according to it's filtering needs.

[Demo of dynamicFilter](https://codepen.io/shanemgrey/pen/aVNJZd?editors=1010)
