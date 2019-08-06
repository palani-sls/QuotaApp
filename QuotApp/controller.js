app.controller('QuotaController', function ($scope, QuotaFactory) {

  //form's object persisted in the factory/service
  $scope.QuotationForm = QuotaFactory.get();
  $scope.GlobalVars = QuotaFactory.getGlobalVars();

  $scope.registeredClient = $scope.GlobalVars.registeredClient;
  $scope.registeredClientProc = $scope.GlobalVars.registeredClientProc;

  $scope.updateGlobalVars = function(){
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
    } else {
      console.log("Error In Form");
      console.log("navigating to main and the switch varr is at: " + $scope.registeredClient);
      // toastr.warning("Some Fields May Be Empty");
    }
  }

  $scope.navToClientForm = function () {
    $scope.registeredClientProc = true;
    console.log("Creating a new client");
  }

  $scope.loadFormDetails = function (){
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



});
