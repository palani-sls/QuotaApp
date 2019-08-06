app.factory("QuotaFactory", function (){

    //Persisted Objects
    var quotationFormData = {};
    var globalVars = {
        registeredClient: false, 
        registeredClientProc: false,
    };

    function set(formData){
        quotationFormData = formData;
    }

    function get(){
        return quotationFormData;
    }

    function setGlobalVars(varsObj){
        globalVars = varsObj;
    }

    function getGlobalVars(){
        return globalVars;
    }


    return {
        set: set, 
        get: get,
        setGlobalVars:setGlobalVars, 
        getGlobalVars, getGlobalVars

    }

})