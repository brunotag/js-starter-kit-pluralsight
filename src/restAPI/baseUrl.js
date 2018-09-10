export default function getBaseUrl() {
  return getQueryStringParameterByName('useMockApi') ? 'http://localhost:3001/' : '/';
}

//should use a library, like jQuery instead
function getQueryStringParameterByName(name) {
  name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
  var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
      results = regex.exec(location.search);
  return results == null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}
