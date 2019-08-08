app.controller('QuotaController', function ($scope, QuotaFactory) {

  //form's object persisted in the factory/service
  $scope.QuotationForm = QuotaFactory.get();
  $scope.GlobalVars = QuotaFactory.getGlobalVars();

  // $scope.serverDataList = QuotaFactory.getServer();
  // $scope.ipDataList = QuotaFactory.getIP();
  // $scope.internetDataList = QuotaFactory.getInternet();
  // $scope.vpcDataList = QuotaFactory.getVPC();
  // $scope.vpnDataList = QuotaFactory.getVPN();

  $scope.registeredClient = $scope.GlobalVars.registeredClient;
  $scope.registeredClientProc = $scope.GlobalVars.registeredClientProc;

  $scope.updateGlobalVars = function () {
    $scope.GlobalVars = {
      registeredClient: $scope.registeredClient,
      registeredClientProc: $scope.registeredClientProc,
    }
    QuotaFactory.setGlobalVars($scope.GlobalVars);
  }

  $scope.quoteDate = $scope.QuotationForm.quoteDate;
  $scope.clientId = $scope.QuotationForm.clientId;
  $scope.clientName = $scope.QuotationForm.clientName;
  $scope.clientCompany = $scope.QuotationForm.clientCompany;
  $scope.clientEmail = $scope.QuotationForm.clientEmail;
  $scope.clientPhone = $scope.QuotationForm.clientPhone;
  $scope.clientAddress = $scope.QuotationForm.clientAddress;
  $scope.selectedProject = $scope.QuotationForm.selectedProject;

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
        toastr.success("PDF Downloaded");
      });
  }

  $scope.getUserData = function (QuotationForm) {
    if (QuotationForm != null) {
      QuotaFactory.set(QuotationForm);
    }
  }

  $scope.ExportText = function () {
    var obj = {
      serverList: $scope.serverList,
      publicIPList: $scope.publicIPList,
      iTrafficList: $scope.iTrafficList,
      vpcList: $scope.vpcList,
      vpnList: $scope.vpnList
    };
    var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(obj));

    var a = document.createElement('a');
    a.href = 'data:' + data;
    a.download = 'falvorJSON.txt';
    a.innerHTML = 'download .txt file of flavor json';
    a.click();
    console.log("Downloading JSON Text File");
    toastr.success("TextFile Downloaded");

  }

});