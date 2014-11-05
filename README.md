# Foundation5-sass

A Foundation 5.4.7 Meteor package with sass support.

[![Codeship Status for matthewforr/meteor-foundation5-sass](https://codeship.io/projects/e49f4990-3619-0132-02be-66e2e8c2d9ae/status)](https://codeship.io/projects/41324)

Why use this package?

* You can use _settings.scss and override Foundation defaults
* You can use Foundation Javascript plugins easily
* You can have a zero-effort and lightweight styleguide with the [Foundation Kitchensink](http://foundation.zurb.com/docs/components/kitchen_sink.html)
* Committed to tracking closely with the latest version of Foundation

## Meteor 1.0.0+

Please use v0.0.15 or above with Meteor 0.9.0. For those stuck in earlier version of Meteor, get v0.0.13.

## How to use

### Add the scss file

Add `@import ".meteor/local/build/programs/server/assets/packages/matthew_foundation5-sass/foundation";` to your main .scss file. **This will be relative to where you keep your sass files**

If you want to configure Foundation, copy the `_settings.scss` from the root of this project into your app and add `@import "/path/to/settings";` before `@import ".meteor/local/build/programs/server/assets/packages/matthew_foundation5-sass/foundation";`.

### Initialize Foundation js

add `{{initFoundation}}` at the very end of the body tag of your page or at the end of your layout template.

### Throw in the kitchen sink
This package makes the Foundation [Kitchen Sink](foundation.zurb.com/docs/components/kitchen_sink.html) available so you can have a straightforward styleguide. Just add `{{> kitchensink}}` to a template or layout and you will have everything.

### Manually adding the package

This is an option if you are running into problems.

First, checkout this package from github using clone to desktop, etc.

Then, from your meteor project directory:

```
mkdir -p packages
mrt link-package /path/to/meteor-foundation5-sass
meteor add meteor-foundation5-sass
```

That should do it. When you add the Sass files you will add it relative to it like this: `@import "/path/to/packages/meteor-foundation5-sass/foundation";`



## Testing

You can test this package with meteor test-packages. Currently it checks the following items:

- Are base foundation styles applied?
- Can it find the kitchen sink template?
- Is the $.fn.foundation global object loaded?