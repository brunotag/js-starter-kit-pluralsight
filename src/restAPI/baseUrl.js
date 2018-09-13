export default function getBaseUrl() {
  const hirokuUrl = "https://nameless-hollows-16461.herokuapp.com/";
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : hirokuUrl;
}

//should use a library, like jQuery instead
function getQueryStringParameterByName(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
