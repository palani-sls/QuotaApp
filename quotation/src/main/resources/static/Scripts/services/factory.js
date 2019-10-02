app.factory("QuotaFactory", function () {
alert("abc");
    //Persisted Objects
    var quotationFormData = {};
    var globalVars = {
        registeredClient: false,
        registeredClientProc: false,
    };

    var serverData = [];
    var ipData = [];
    var iTrafficData = [];
    var vpcData = [];
    var vpnData = [];
    var quotationFlavorData=[];

    function set(formData) {
        quotationFormData = formData;
    }

    function get() {
        return quotationFormData;
    }

    function setServer(server) {
        serverData = server;
    }

    function getServer() {
        return serverData;
    }

    function setIP(publicIP) {
        ipData = publicIP;
    }

    function getIP() {
        return ipData;
    }

    function setInternet(iTrafficList) {
        iTrafficData = iTrafficList;
    }

    function getInternet() {
        return iTrafficData;
    }

    function setVPC(vpcList) {
        vpcData = vpcList;
    }

    function getVPC() {
        return vpcData;
    }

    function setVPN(vpnList) {
        vpnData = vpnList;
    }

    function getVPN() {
        return vpnData;
    }

    function setQuotation(quotationFlavorData) {
        quotationData = quotationFlavorData;
    }

    function getQuotation() {
        return quotationData;
    }






    function set(formData) {
        quotationFormData = formData;
    }

    function get() {
        return quotationFormData;
    }

    function setGlobalVars(varsObj) {
        globalVars = varsObj;
    }

    function getGlobalVars() {
        return globalVars;
    }


    return {
        set: set,
        get: get,
        setGlobalVars: setGlobalVars,
        getGlobalVars,
        getGlobalVars,
        setServer: setServer,
        getServer: getServer,
        setIP: setIP,
        getIP: getIP,
        setInternet: setInternet,
        getInternet: getInternet,
        setVPC: setVPC,
        getVPC: getVPC,
        setVPN: setVPN,
        getVPN: getVPN,
        setQuotation: setQuotation,
        getQuotation: getQuotation

    }

})
