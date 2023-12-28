const doc01 = { name: "Strings & Library Classes", url: "FrozenNotes-String_Handelling-Library_Classes-JavaNotes.pdf" };
const doc02 = { name: "Term 2 Notes", url: "FrozenNotesCA2.pdf" };
const doc03 = { name: "Errors & Infinite Loop", url: "ICSE-CA-ERRORS.pdf" };
const doc04 = { name: "Board Exam Notes", url: "ICSE-JavaNotes-V4.7.2.pdf" };
//function extractQueryParam() {
const urlParams = new URLSearchParams(window.location.search);
const doc = "doc" + urlParams.get('doc');
console.log(doc);
const name1 = eval(doc).name;
console.log(name1);
const url1 = eval(doc).url;
console.log(url1);
document.getElementById("doctitl").innerHTML = name1;
document.getElementById("dlink").href = url1;
//}
/*
document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var adobeDCView = new AdobeDC.View({ clientId: "<YOUR_CLIENT_ID>", divId: "adobe-dc-view" });
    adobeDCView.previewFile({
        content: { location: { url: "https://documentservices.adobe.com/view-sdk-demo/PDFs/Bodea Brochure.pdf" } },
        metaData: { fileName: "Bodea Brochure.pdf" }
    }, { embedMode: "IN_LINE" });
});
*/
// UI options in a constant
const previewConfig = {
    embedMode: "IN_LINE",
    showDownloadPDF: true,
    showZoomControl: true
}

document.addEventListener("adobe_dc_view_sdk.ready", function () {
    var adobeDCView = new AdobeDC.View({ clientId: "20d69419a7394a4c84a84189c3bde23b", divId: "adobe-dc-view" });
    adobeDCView.previewFile({
        content: { location: { url: url1 } },
        metaData: { fileName: name1 }
    }, {
        embedMode: "IN_LINE"
        });
});

adobeDCView.registerCallback(
    /* Type of call back */
    AdobeDC.View.Enum.CallbackType.EVENT_LISTENER,
    /* call back function */
    function (event) {
        console.log(event);
    },
    { 
        enablePDFAnalytics: true 
    }
);