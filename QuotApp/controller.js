app.controller('QuotaController', function ($scope, QuotaFactory) {

  //form's object persisted in the factory/service
  $scope.QuotationForm = QuotaFactory.get();
  $scope.GlobalVars = QuotaFactory.getGlobalVars();

  $scope.registeredClient = $scope.GlobalVars.registeredClient;
  $scope.registeredClientProc = $scope.GlobalVars.registeredClientProc;

  $scope.updateGlobalVars = function () {
    $scope.GlobalVars = {
      registeredClient: $scope.registeredClient,
      registeredClientProc: $scope.registeredClientProc,
    }
    QuotaFactory.setGlobalVars($scope.GlobalVars);
  }

  // $scope.quoterInitials = "";
  $scope.quoterName = "SLS Quote Handler";
  $scope.quoterPhone = "+60 12 2332 049";
  $scope.quoterEmail = "SLSQuote@silverliningsys.com";

  // $scope.quoteDate;
  // $scope.clientId = "";
  // $scope.clientName = "";
  // $scope.clientCompany = "";
  // $scope.clientEmail = "";
  // $scope.clientPhone = "";
  // $scope.clientAddress = "";
  // $scope.selectedProject = "";

  $scope.quoteDate = $scope.QuotationForm.quoteDate;
  $scope.clientId = $scope.QuotationForm.clientId;
  $scope.clientName = $scope.QuotationForm.clientName;
  $scope.clientCompany = $scope.QuotationForm.clientCompany;
  $scope.clientEmail = $scope.QuotationForm.clientEmail;
  $scope.clientPhone = $scope.QuotationForm.clientPhone;
  $scope.clientAddress = $scope.QuotationForm.clientAddress;
  $scope.selectedProject = $scope.QuotationForm.selectedProject;


  //all resources costs are unit cost per hour

  //STD_resources
  $scope.STD_vCPU = 0.0352;
  $scope.STD_vpc = 0.02888889;

  $scope.saveFormData = function (dataToSave) {
    if (dataToSave != null) {
      QuotaFactory.set(dataToSave);
      console.log("Data Saved {}: ");
      console.log(dataToSave);
      $scope.ShowHideSwitch();
      toastr.success("Client Details Regeistered");
    } else {
      toastr.warning("Some Fields May Be Empty In The Client Registration Form");
    }
  }

  $scope.navToClientForm = function () {
    $scope.registeredClientProc = true;
    console.log("Creating a new client");
  }

  $scope.loadFormDetails = function () {
    $scope.QuotationForm = QuotaFactory.get();
    console.log("Loading Form Object{}:");
    console.log($scope.QuotationForm);

    $scope.quoteDate = $scope.QuotationForm.quoteDate;
    $scope.clientId = $scope.QuotationForm.clientId;
    $scope.clientName = $scope.QuotationForm.clientName;
    $scope.clientCompany = $scope.QuotationForm.clientCompany;
    $scope.clientEmail = $scope.QuotationForm.clientEmail;
    $scope.clientPhone = $scope.QuotationForm.clientPhone;
    $scope.clientAddress = $scope.QuotationForm.clientAddress;
    $scope.selectedProject = $scope.QuotationForm.selectedProject;

  }

  $scope.ShowHideSwitch = function () {
    if ($scope.QuotationForm != null) {
      $scope.registeredClient = true;
      $scope.registeredClientProc = true
      $scope.updateGlobalVars();
    } else {
      console.log("Obj empty so, yea...");
    }
  };

  $scope.newQuoteClient = function () {
    console.log("Client Form Submitted");
    // window.location = "Index.html#/ClientForm";
  }

  $scope.IsVisible = true;
  $scope.Visible = false;

  $scope.serverName = "";
  $scope.serverSite = "";
  $scope.cpuSize = "";
  $scope.memorySize = "";
  $scope.diskSize = "";
  $scope.ipQty = "";
  $scope.ipQtty = "";
  $scope.internetTraffic = "";
  $scope.vpcQty = "";
  $scope.vpnQty = "";
  $scope.serverList = [];
  $scope.publicIPList = [];
  $scope.iTrafficList = [];
  $scope.vpcList = [];
  $scope.vpnList = [];

  $scope.serverSiteList = {
    availableOptions: [{
      id: '1',
      site_name: 'SLS_Cyber'
    }],
    selectedOption: {
      id: '1',
      site_name: 'SLS_Cyber'
    } //This sets the default value of the select in the ui
  };


  $scope.environmentList = {
    availableOptions: [{
      id: '1',
      env_name: 'Standard'
    }],
    selectedOption: {
      id: '1',
      env_name: 'Standard'
    } //This sets the default value of the select in the ui
  };

  $scope.diskTypeList = {
    availableOptions: [{
        id: '1',
        disk_type: 'General'
      },
      {
        id: '2',
        disk_type: 'Premium'
      },
      {
        id: '3',
        disk_type: 'Performance'
      }
    ],
    selectedOption: {
      id: '1',
      disk_type: 'General'
    } //This sets the default value of the select in the ui
  };

  // This is to add the server and details to a list
  $scope.addServer = function () {
    if ($scope.serverName != "" && $scope.cpuSize != "" && $scope.memorySize != "" && $scope.diskSize != "") {

      if ($scope.environmentList.selectedOption.env_name == "Standard" && $scope.diskTypeList.selectedOption.disk_type == "General") {

        var vcpu = $scope.cpuSize * 0.0352;
        var mem = $scope.memorySize * 0.0512;
        var disk = $scope.diskSize * 0.0003333333333;
        var ip = $scope.ipQty * 0.0288888896;

        var mcost = ((vcpu + mem) * 730.5) + (disk * 730.5) + (ip * 730.5);

        $scope.hcost = (vcpu + mem + disk + ip).toFixed(8);
        $scope.mcost = mcost.toFixed(8);
        $scope.tmcost = mcost.toFixed(2);
      } else if ($scope.environmentList.selectedOption.env_name == "Standard" && $scope.diskTypeList.selectedOption.disk_type == "Premium") {
        var vcpu = $scope.cpuSize * 0.0352;
        var mem = $scope.memorySize * 0.0512;
        var disk = $scope.diskSize * 0.00042;
        var ip = $scope.ipQty * 0.0288888896;

        var mcost = ((vcpu + mem) * 730.5) + (disk * 730.5) + (ip * 730.5);

        $scope.hcost = (vcpu + mem + disk + ip).toFixed(8);
        $scope.mcost = mcost.toFixed(8);
        $scope.tmcost = mcost.toFixed(2);
      } else if ($scope.environmentList.selectedOption.env_name == "Standard" && $scope.diskTypeList.selectedOption.disk_type == "Performance") {
        var vcpu = $scope.cpuSize * 0.0352;
        var mem = $scope.memorySize * 0.0512;
        var disk = $scope.diskSize * 0.00071104;
        var ip = $scope.ipQty * 0.0288888896;

        var mcost = ((vcpu + mem) * 730.5) + (disk * 730.5) + (ip * 730.5);

        $scope.hcost = (vcpu + mem + disk + ip).toFixed(8);
        $scope.mcost = mcost.toFixed(8);
        $scope.tmcost = mcost.toFixed(2);
      } else if ($scope.environmentList.selectedOption.env_name == "Premium" && $scope.diskTypeList.selectedOption.disk_type == "General") {
        var vcpu = $scope.cpuSize * 0.0704;
        var mem = $scope.memorySize * 0.1024;
        var disk = $scope.diskSize * 0.00042;
        var ip = $scope.ipQty * 0.0288888896;

        var mcost = ((vcpu + mem) * 730.5) + (disk * 730.5) + (ip * 730.5);

        $scope.hcost = (vcpu + mem + disk + ip).toFixed(8);
        $scope.mcost = mcost.toFixed(8);
        $scope.tmcost = mcost.toFixed(2);
      } else if ($scope.environmentList.selectedOption.env_name == "Premium" && $scope.diskTypeList.selectedOption.disk_type == "Premium") {
        var vcpu = $scope.cpuSize * 0.0704;
        var mem = $scope.memorySize * 0.1024;
        var disk = $scope.diskSize * 0.00042;
        var ip = $scope.ipQty * 0.0288888896;

        var mcost = ((vcpu + mem) * 730.5) + (disk * 730.5) + (ip * 730.5);

        $scope.hcost = (vcpu + mem + disk + ip).toFixed(8);
        $scope.mcost = mcost.toFixed(8);
        $scope.tmcost = mcost.toFixed(2);
      } else if ($scope.environmentList.selectedOption.env_name == "Premium" && $scope.diskTypeList.selectedOption.disk_type == "Premium") {
        var vcpu = $scope.cpuSize * 0.0704;
        var mem = $scope.memorySize * 0.1024;
        var disk = $scope.diskSize * 0.00071104;
        var ip = $scope.ipQty * 0.0288888896;

        var mcost = ((vcpu + mem) * 730.5) + (disk * 730.5) + (ip * 730.5);

        $scope.hcost = (vcpu + mem + disk + ip).toFixed(8);
        $scope.mcost = mcost.toFixed(8);
        $scope.tmcost = mcost.toFixed(2);
      }

      $scope.serverList.push({
        name: $scope.serverName,
        site: $scope.serverSiteList.selectedOption.site_name,
        environment: $scope.environmentList.selectedOption.env_name,
        diskType: $scope.diskTypeList.selectedOption.disk_type,
        cpu: $scope.cpuSize,
        mem: $scope.memorySize,
        disk: $scope.diskSize,
        ipQty: $scope.ipQty,
        hcost: $scope.hcost,
        mcost: $scope.mcost,
        tmcost: $scope.tmcost
      });

      $scope.serverName = "";
      $scope.serverSite = "";
      $scope.cpuSize = "";
      $scope.memorySize = "";
      $scope.diskSize = "";
      $scope.ipQty = "";

      toastr.success("Server Added");

    } else toastr.warning("Please complete the server's flavor");
    // $scope.serverDetails=[];
  }

  // Delete the server from the list
  $scope.deleteServer = function (index) {
    $scope.serverList.splice(index, 1);
  }


  $scope.addIPQty = function () {

    if ($scope.ipQtty != "") {

      var ip = $scope.ipQtty * 0.0288888896;
      var tmcost = ip * 730.5;
      $scope.hcost = ip;
      $scope.tmcost = tmcost.toFixed(2);

      $scope.publicIPList.push({
        site: $scope.serverSiteList.selectedOption.site_name,
        environment: $scope.environmentList.selectedOption.env_name,
        quantity: $scope.ipQtty,
        hcost: $scope.hcost,
        tmcost: $scope.tmcost
      });

      toastr.success("Public IP Added");

      $scope.ipQtty = "";
    } else {
      toastr.warning("Please fill in the Quantity");
    }
    // $scope.publicIPDetails=[];
  }

  $scope.deleteIP = function (index) {
    $scope.publicIPList.splice(index, 1);
  }

  $scope.addInternet = function () {

    if ($scope.internetTraffic != "") {

      var internet = $scope.internetTraffic * 0.384;
      var tmcost = internet;
      $scope.rate = 0.384;
      $scope.tmcost = tmcost.toFixed(2);



      $scope.iTrafficList.push({
        site: $scope.serverSiteList.selectedOption.site_name,
        environment: $scope.environmentList.selectedOption.env_name,
        iTEstimate: $scope.internetTraffic,
        rate: $scope.rate,
        tmcost: $scope.tmcost
      });

      toastr.success("Internet Traffic Added");

      $scope.internetTraffic = "";
      // $scope.iTrafficDetails=[];
    } else {
      toastr.warning("Please fill in the Quantity");
    }
  }

  $scope.deleteInternet = function (index) {
    $scope.iTrafficList.splice(index, 1);
  }

  $scope.addVPC = function () {

    if ($scope.vpcQty != "") {

      var vpc = $scope.vpcQty * 0.0288888896;
      var tmcost = vpc * 730.5;
      $scope.hcost = vpc;
      $scope.tmcost = tmcost.toFixed(2);


      $scope.vpcList.push({
        site: $scope.serverSiteList.selectedOption.site_name,
        environment: $scope.environmentList.selectedOption.env_name,
        quantity: $scope.vpcQty,
        hcost: $scope.hcost,
        tmcost: $scope.tmcost
      });

      toastr.success("VPC Added");

      $scope.vpcQty = "";
      // $scope.vpcDetails=[];
    } else {
      toastr.warning("Please fill in the Quantity");
    }
  }

  $scope.deleteVPC = function (index) {
    $scope.vpcList.splice(index, 1);
  }

  $scope.addVPN = function () {

    if ($scope.vpnQty != "") {

      var vpn = $scope.vpnQty * 0.16;
      var tmcost = vpn * 730.5;
      $scope.hcost = vpn;
      $scope.tmcost = tmcost.toFixed(2);


      $scope.vpnList.push({
        site: $scope.serverSiteList.selectedOption.site_name,
        environment: $scope.environmentList.selectedOption.env_name,
        quantity: $scope.vpnQty,
        hcost: $scope.hcost,
        tmcost: $scope.tmcost
      });

      toastr.success("VPN Added");


      $scope.vpnQty = "";
      // $scope.vpnDetails=[];
    } else {
      toastr.warning("Please fill in the Quantity");
    }
  }

  $scope.deleteVPN = function (index) {
    $scope.vpnList.splice(index, 1);
  }

  // Store the data of flavor using factory/service, in order to display in other page.
  $scope.saveFlavorData = function () {

    // QuotaFactory.setServer($scope.serverList);
    // QuotaFactory.setIP($scope.publicIPList);
    // QuotaFactory.setInternet($scope.iTrafficList);
    // QuotaFactory.setVPC($scope.vpcList);
    // QuotaFactory.setVPN($scope.vpnList);
    // $scope.ShowHideSwitch();
    $scope.Visible = $scope.Visible = true;
    $scope.IsVisible = $scope.IsVisible = false;

    // $scope.serverDataList = QuotaFactory.getServer();
    // $scope.ipDataList = QuotaFactory.getIP();
    // $scope.internetDataList = QuotaFactory.getInternet();
    // $scope.vpcDataList = QuotaFactory.getVPC();
    // $scope.vpnDataList = QuotaFactory.getVPN();
  }

  // Calculation of the total estimate cost for flavor
  $scope.getTotal = function () {
    var total = 0;

    for (var i = 0; i < $scope.serverList.length; i++) {
      var server = $scope.serverList[i];
      var cost = parseFloat(server.tmcost);
      total += cost;
    }
    for (var i = 0; i < $scope.publicIPList.length; i++) {
      var ip = $scope.publicIPList[i];
      var cost = parseFloat(ip.tmcost);
      total += cost;
    }
    for (var i = 0; i < $scope.iTrafficList.length; i++) {
      var internet = $scope.iTrafficList[i];
      var cost = parseFloat(internet.tmcost);
      total += cost;
    }
    for (var i = 0; i < $scope.vpcList.length; i++) {
      var vpc = $scope.vpcList[i];
      var cost = parseFloat(vpc.tmcost);
      total += cost;
    }
    for (var i = 0; i < $scope.vpnList.length; i++) {
      var vpn = $scope.vpnList[i];
      var cost = parseFloat(vpn.tmcost);
      total += cost;
    }

    return total.toFixed(2);
  }

  // Move back to previous view from Preview.
  $scope.backToPrevious = function () {

    $scope.Visible = $scope.Visible = false;
    $scope.IsVisible = $scope.IsVisible = true;

  }


  $scope.ExportPdf = function () {
    kendo.drawing
      .drawDOM("#myCanvas", {
        paperSize: "A4",
        margin: {
          top: "1cm",
          bottom: "1cm"
        },
        scale: 0.5,
        height: 700
      })
      .then(function (group) {
        kendo.drawing.pdf.saveAs(group, "flavor.pdf")
      });
  }

  $scope.getUserData = function (QuotationForm) {
    if (QuotationForm != null) {
      QuotaFactory.set(QuotationForm);
    }
  }

});
