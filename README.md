# meteor-foundation5-sass

A Foundation 5 Meteor package with sass support.

## Foundation Version

This package use version 5.3.0 of Foundation

## Meteor 0.8.0

Please use v0.0.12 or above with Meteor 0.8.0. For those stuck in earlier version of Meteor, get v0.0.11.

## How to use

### Add the scss file

add `@import "packages/foundation5-sass/foundation";` to your main .scss file

If you want to configure Foundation, copy the `_settings.scss` from the root of this project into your app and add `@import "_settings.scss";` before `@import "packages/foundation5-sass/foundation";`.

### Initialize Foundation js

add `{{initFoundation}}` at the very end of the body tag of your page or at the end of your layout template.

### Throw in the kitchen sink
This package makes the Foundation [Kitchen Sink](foundation.zurb.com/docs/components/kitchen_sink.html) available so you can have a straightforward styleguide. Just add `{{> kitchensink}}` to a template or layout and you will have everything.