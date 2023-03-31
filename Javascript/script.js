<!-- Gainsight PX Tag-->
  <script type="text/javascript">
  (function(n,t,a,e,co){var i="aptrinsic";n[i]=n[i]||function(){
      (n[i].q=n[i].q||[]).push(arguments)},n[i].p=e;n[i].c=co;
    var r=t.createElement("script");r.async=!0,r.src=a+"?a="+e;
    var c=t.getElementsByTagName("script")[0];c.parentNode.insertBefore(r,c)
  })(window,document,"https://web-sdk.aptrinsic.com/api/aptrinsic.js","AP-IBPAQL0KHSJ7-2");
</script>
<!-- Gainsight PX Tag-->

function allowlogin(usermail)
{
    var a = document.getElementById("usermail").value;
    if (a == 'kgodiselagainsight.com')
    { 
        var b= a.substr(0,5);
        alert('valid user');
        
      aptrinsic("identify",
      {
      //User Fields
        "id": "unique-user-id", // Required for logged in app users
        "email": "userEmail@address.com",
        "firstName": "John",
        "lastName": "Smith",
        
     },
      {
      //Account Fields
        "id":"IBM", //Required
        "name":"International Business Machine",
        "Program": "Platinum" // flat custom attributes
     });
      
        location.href = "Page1.html";
    }
    else if(a == '')
    {
        alert('invalid User. Enter demouser@gmail.com as username');
    }
}

function addtocart()
{
    alert("Added to cart");
}
