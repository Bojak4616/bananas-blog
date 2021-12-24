// Open details section if anchor is found in URL
$(function() {
    var hash = $(location).attr('hash');
    if(hash){
        var $targetDIV = $(`a[href*="${hash}"]`)
        if ($targetDIV.is(":hidden")) {
            $targetDIV.closest("details").prop("open", true);
            location.hash = hash;
        }
    }
});
    