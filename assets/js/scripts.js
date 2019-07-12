/*
Author: Zekinah Joy Lecaros
Description: Native Loading Screen
Version: 1.0
*/
$ = jQuery.noConflict();
$(function () {
    console.log('Loading Resources............100%');
    loading();
});

function loading() {
    $("#loading").delay(1000).fadeOut();
}