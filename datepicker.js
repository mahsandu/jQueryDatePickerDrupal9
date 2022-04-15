$( function() {
    $( "#datepicker" ).datepicker({
      showButtonPanel:true,
      changeMonth: true,
      changeYear: true,
      yearRange: "1971:"+(new Date).getFullYear(),
      maxDate: 0
    });
  } );
