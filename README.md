# Source Code #
- A jQuery Widget. Shows the underlying HTML in a given element.

### Usage ###
sourceCode will instantiate itself automatically using the default class ```js-source-code```

To instantiate the widget independently, use the following:

```js
// Options is an optional parameter, see the defaults below
$('.element-selector').sourceCode();
```


### Options

* `identifier` **default: sourcecode** Used as the event namespace identifier and the element's data attribute name
* `targetSelector` **default: 'has-child'** The class to give to a *navItemSelector* with children
* `destinationSelector` *default: 'has-active-child'* The class to give to a parent *navItemSelector* with active children

### Locally Overriding Options

Any of the options can be overridden on the element itself using dash syntax. 

E.g. to override the options ```targetSelector``` and ```destinationSelector```, use the following data attributes:
 
 ```html
 <div class="js-source-code" data-sourcecode-target-selector=".code-alternative-source" data-sourcecode-destination-selector=".alternate-destination">
     <div class="code-alternative-source">
         Override local options <strong>codeContainerSelector</strong> and <strong>targetSelector</strong>
     </div>

     <div class="alternate-destination"></div>
 </div>
 ```

### Methods ###

* `update` Updates the generated source code based on the ```targetSelector```
* `destroy` Removes the generated source code