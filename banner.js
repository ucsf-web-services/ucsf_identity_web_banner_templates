$(document).ready(function() {
    var scratchpad = document.createElement("textarea");
    // @link http://stackoverflow.com/a/9251169
    var escapeMarkup = function(html) {
        scratchpad.innerHTML = html;
        return scratchpad.innerHTML;
    };
    var fillSnippetContainerWithBannerMarkup = function() {
        var snippetContainer = document.getElementById("code-snippet");
        var bannerContainer =  document.getElementById("ucsf-banner-nav");
        snippetContainer.innerHTML = escapeMarkup(bannerContainer.outerHTML);
        hljs.highlightBlock(snippetContainer);
    };
    var setBannerClassesFromForm = function() {
        var classes = "";
        classes += $("#font-options option:selected").val();
        classes += " " + $("#color-options option:selected").val();
        if($("#logo-enabled").is(':checked')) {
            classes += " no-logo";
        }
        classes = $.trim(classes);
        if (classes) {
            $("#ucsf-banner-nav").removeClass().addClass(classes);
        } else {
            $("#ucsf-banner-nav").removeAttr('class');
        }
    };
    var onFormStateChange = function(evt) {
        setBannerClassesFromForm();
        fillSnippetContainerWithBannerMarkup();
    };
    $("#font-options").on("change", onFormStateChange);
    $("#color-options").on("change", onFormStateChange);
    $("#logo-enabled").on("change", onFormStateChange);
    fillSnippetContainerWithBannerMarkup();
});