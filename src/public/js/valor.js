                   $(document).ready(function(){
                     $('#obtenerdato').click(()=>{
                        alertify.minimalDialog || alertify.dialog('minimalDialog',function(){
                      return {
                      main:function(content){
                      this.setContent(content); 
                       }
                     };
                   }); 
                        alertify.minimalDialog("Minimal button-less dialog.");
                })});
                   
            