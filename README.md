# UCSF Identity Web Banner Templates


Templates for website banners that are compliant with [UCSF Identity Standards](http://identity.ucsf.edu/website).


## Usage

Download the [latest release](https://github.com/ucsf-web-services/ucsf_identity_web_banner_templates/releases/latest) from GitHub.

Add `banners.css`, `ucsf-logo-banner.png`, `ucsf-logo-banner.svg` and `ucsf-logo-banner-mobile.png` to your webroot and link it from within your markup. Please make sure that the CSS file and the image files are located in the same directory.

```html
<link rel="stylesheet" type="text/css" href="path/to/your/banners.css">
```

Then add the banner snippet to your markup right underneath the `<body>` tag.

```html
<div id="ucsf-banner-nav" class="logo">
    <div class="inner">
        <div>
            <a class="logotype" href="http://www.ucsf.edu/">
                <span>University of California San Francisco</span>
            </a>
        </div>
        <div class="nav">
            <ul>
                <li><a href="http://www.ucsf.edu/about">About UCSF</a></li>
                <li><a href="http://www.ucsf.edu/search">Search UCSF</a></li>
                <li><a href="http://www.ucsfhealth.org/">UCSF Medical Center</a></li>
            </ul>
        </div>
    </div>
</div>
```

You may then customize your banner by adding links as applicable.

For font, color and logo variations, please see our [example page](http://ucsf-web-services.github.io/ucsf_identity_web_banner_templates/).


## Copyright and Licence

* Source Repository: https://github.com/ucsf-web-services/ucsf_identity_web_banner_templates
* Licensed under the MIT License
* Copyright (c) 2014 Regents of the University of California



