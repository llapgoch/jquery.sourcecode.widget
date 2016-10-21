# Source Code #
- A jQuery Widget. Shows the underlying HTML in a given element.

### Usage ###
sourceCode will instantiate itself automatically using the default class ```js-source-code```

To instantiate the widget independently, use the following:

```js
// Options is an optional parameter, see the defaults below
$('.element-selector').sourceCode();
```

### Default HTML Structure
In this example, the source code version of ```.code-target``` will be created directly after it in the DOM. 
```html
<div class="js-source-code">
    <div class="code-target">
        Default <em>Code</em> <strong>Example!</strong>
    </div>
</div>
```


### Options

* `identifier` **default: sourcecode** Used as the event namespace identifier and the element's data attribute name
* `targetSelector` **default: 'code-target'** The selector used to find the element to get the HTML code from within the element
* `destinationSelector` **default: ''** The place to make the source code element. If left blank, the element will be created after the ```targetSelector```

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