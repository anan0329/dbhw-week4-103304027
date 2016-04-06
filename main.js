var API_PATH = "http://data.taipei/opendata/datalist/apiAccess?scope=resourceAquire&rid=38f2d8e0-07ce-4201-87cb-3462be39d8aa";
function getData(cb) {
  $.ajax({
    url : API_PATH,
    method : "GET",
    success : function(data) {
      cb(null, data);
    },
    error : function(err) {
      cb(err);
    }
  });
}
