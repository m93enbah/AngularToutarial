import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,FormBuilder, FormArray } from '@angular/forms';
import { Validators } from '@angular/forms';
import {emailDomain,matchEmails} from '../../Validators/email-validators';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpServiceService } from '../../Services/emp-service.service';
import { ISkill,IEmployee } from '../../Models/iemployee';

@Component({
  selector: 'app-emp-entry-comp',
  templateUrl: './emp-entry-comp.component.html',
  styleUrls: ['./emp-entry-comp.component.css']
})
export class EmpEntryCompComponent implements OnInit {

  constructor(private fb: FormBuilder,private _route:ActivatedRoute,private router:Router,private empService:EmpServiceService) { }
  public employeeForm: FormGroup;
  Arry:FormArray;
  BtnSaveStatus:boolean;
  BtnUpdateStatus:boolean;
  empId:Number;
  BtnState:string = "Save";
  formErrors = {
  'fullName': '',
  'emailGroup':'',
  'email': '',
  'ConfirmEmail':'',
  'phone':'',
  'skillName': '',
  'experienceOfYear': '',
  'proffeicency': ''
  };
  
  // This object contains all the validation messages for this form
  validationMessages = {
  'fullName': {
  'required': 'Full Name is required.',
  'minlength': 'Full Name must be greater than 5 characters.',
  'maxlength': 'Full Name must be less than 10 characters.',
  },
  'emailGroup':
  {
  'CompareEmails':'Email And Confirm Email Must Match',
  },
  'email': {
  'required': 'Email is required.',
  'emailDomain': 'Email domian should be hotmail.com or gmail.com',
  },
  'ConfirmEmail':
  {
  'required':'Confirm Email is required',
  },
  'phone': {
  'required': 'phone is required.',
  },
  
  'skillName': {
  'required': 'Skill Name is required.',
  },
  'experienceOfYear': {
  'required': 'Experience is required.',
  },
  'proffeicency': {
  'required': 'Proficiency is required.',
  },
  };
  



  
  ngOnInit() {
    //At the page load we reset the employee object to null and then we get the parameter id to check it if contain value or not to detect which mode it will be
    this.empService.employee = null;
    this._route.paramMap.subscribe(params => {
    this.empId = +params.get('id');
    
    //If the employee id is not null then the page is in edit mode
    if (this.empId > 0) {
    //we initialize the form group with empty form array that will be filled by
    this.employeeForm = this.fb.group({
    fullName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    emailGroup: this.fb.group({
    email: ['', Validators.compose([Validators.required, emailDomain('hotmail.com','gmail.com')])],
    ConfirmEmail: ['', [Validators.required]]
    }, { validator: matchEmails }),
    contactPreference: ['email'],
    phone: [''],
    skills: this.fb.array([])
    });
    //the below method it’s used to dynamically create form group and then fill them //all to allow the user to edit them
    this.getEmployee(this.empId);
    this.BtnUpdateStatus = true;
    this.BtnSaveStatus = false;}
    // this.SetButtonState();}
    else {
    //We set the page in ADD Mode with initialize the form array with single form //group only
    this.employeeForm = this.fb.group({
    fullName: ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    emailGroup: this.fb.group({
    email: ['', Validators.compose([Validators.required, emailDomain('hotmail.com','gmail.com')])],
    ConfirmEmail: ['', [Validators.required]]
    }, { validator: matchEmails }),
    contactPreference: [''],
    phone: [''],
    skills: this.fb.array([
    this.addSkillFormGroup()])});
    this.BtnUpdateStatus = false;
    this.BtnSaveStatus = true;}});
    
    //we used value Changes event when the user change every character it will check //the entire form group validation
    this.employeeForm.valueChanges.subscribe((data) => {
    this.logControlsInsideFormGroup(this.employeeForm);});
  }

















  SetSaveButtonState(){
  if(this.BtnSaveStatus){let x ={Showutton : true};return x;}
  else{let x ={HideButton : true};return x;}}
  
  SetUpdateButtonState(){
  if(this.BtnUpdateStatus){let x ={Showutton : true};return x;}
  else{let x ={HideButton : true};return x;}}
  

  
  getEmployee(id: Number) {
  this.empService.getEmployee(id)
  .subscribe(
  (res: IEmployee) => this.LoadEmployee(res),
  (err: any) => console.log(err));}
  
  //In the below method we make dynamically create form group in the form array //based on the Skills count and then fill it dynamically
  LoadEmployee(emp:IEmployee){
  for(const item of emp.Skills){
  (<FormArray>this.employeeForm.get('skills')).push(this.addSkillFormGroup());}
  this.empService.employee = emp;
  this.employeeForm.patchValue({
  fullName: emp.fullName,
  contactPreference: emp.contractPreference,
  emailGroup: {
  email: emp.email,
  confirmEmail: emp.email},
  phone: emp.phone,
  skills:emp.Skills
  });}
  //The Following method it will call the service method to call the web api //service method to save employee
  SaveEmployee(): void {
  this.mapFormValuesToEmployeeModel();
  this.empService.addEmployee(this.empService.employee).subscribe(
  () => this.router.navigate(['list']),
  (err: any) => console.log(err));}
  //The Following method it will call the service method to call the web api //service method to update employee
  UpdateEmployee(): void {
  this.mapFormValuesToEmployeeModel();
  this.empService.updateEmployee(this.empService.employee).subscribe(
  () => this.router.navigate(['list']),
  (err: any) => console.log(err));}
  //In the below method we check if the employee object is not null or not if it’s //contain then push it inside the Skills property in the employee object
  mapFormValuesToEmployeeModel() {
  if(this.empService.employee != null){
  this.empService.employee.fullName = this.employeeForm.value.fullName;
  this.empService.employee.contractPreference = this.employeeForm.value.contactPreference;
  this.empService.employee.email = this.employeeForm.value.emailGroup.email;
  this.empService.employee.confirmEmail = this.employeeForm.value.emailGroup.email;
  this.empService.employee.phone = this.employeeForm.value.phone;
  this.empService.employee.Skills = new Array<ISkill>();
  //In the below method we get the skills in the skills form array variable and //then push it inside the employee object
  let skills = <FormArray>this.employeeForm.controls.skills;
  let i:number =0;
  for(const ctrl of skills.controls){
  const skill = new ISkill();
  skill.skillName = ctrl.get('skillName').value;
  skill.experienceOfYear = ctrl.get('experienceOfYear').value;
  skill.proffeicency = ctrl.get('proffeicency').value;
  this.empService.employee.Skills.push(skill);}}
  //When the user in the save mode then it will create new instance of employee and
  //filling the array of skills inside it
  else{
  const emp = new IEmployee();
  emp.fullName = this.employeeForm.value.fullName;
  emp.contractPreference = this.employeeForm.value.contactPreference;
  emp.email = this.employeeForm.value.emailGroup.email;
  emp.confirmEmail = this.employeeForm.value.emailGroup.email;
  emp.phone = this.employeeForm.value.phone;
  emp.Skills = new Array<ISkill>();
  
  let skills = <FormArray>this.employeeForm.controls.skills;
  let i:number =0;
  for(const ctrl of skills.controls){
  const skill = new ISkill();
  skill.skillName = ctrl.get('skillName').value;
  skill.experienceOfYear = ctrl.get('experienceOfYear').value;
  skill.proffeicency = ctrl.get('proffeicency').value;
  emp.Skills.push(skill);}
  
  this.empService.employee = emp;}}
  
  addSkillFormGroup(): FormGroup {
  return this.fb.group({
  id:[''],
  skillName: ['', Validators.required],
  experienceOfYear: ['', Validators.required],
  proffeicency: ['',Validators.required],
  empId:['']
  });}
  //In the below method we get the skills and disable the previous form group and //then add new form group inside it
  addSkillButtonClick(): void {
  this.Arry = this.employeeForm.get('skills') as FormArray;
  this.DisableControlsInFormGroup(this.Arry);
  (<FormArray>this.employeeForm.get('skills')).push(this.addSkillFormGroup());}
  
  DisableControlsInFormGroup(frmArry:FormArray){
  for(const item of frmArry.controls){
  item.get('skillName').markAsTouched();
  item.get('skillName').disable();
  
  item.get('experienceOfYear').markAsTouched();
  item.get('experienceOfYear').disable();
  
  item.get('proffeicency').markAsTouched();
  item.get('proffeicency').disable();}}
  
  removeSkillButtonClick(skillGroupIndex: number,skillID:number): void {
  
  if(skillID > 0){
  this.empService.deleteSkill(skillID).subscribe(
  () => (<FormArray>this.employeeForm.get('skills')).removeAt(skillGroupIndex),
  (err: any) => console.log(err));}
  else{
  (<FormArray>this.employeeForm.get('skills')).removeAt(skillGroupIndex);}}
  //In the below method we make looping of each control in the main form group to get the validation error and store it in the validation Error Message variable
  logControlsInsideFormGroup(group: FormGroup = this.employeeForm): void {
  Object.keys(group.controls).forEach((key: string) => {
  const abstractControl = group.get(key);
  this.formErrors[key] = '';
  // Loop through nested form groups and form controls to check
  // for validation errors. For the form groups and form controls
  // that have failed validation, retrieve the corresponding
  // validation message from validationMessages object and store
  // it in the formErrors object. The UI binds to the formErrors
  // object properties to display the validation errors.
  if (abstractControl && !abstractControl.valid
  && (abstractControl.touched || abstractControl.dirty || abstractControl.value !== '')) {
  const messages = this.validationMessages[key];
  for (const errorKey in abstractControl.errors) {
  if (errorKey) {
  this.formErrors[key] += messages[errorKey] + ' ';}}}
  
  if (abstractControl instanceof FormGroup) {
  this.logControlsInsideFormGroup(abstractControl);}
  
  if (abstractControl instanceof FormArray) {
  for (const control of abstractControl.controls) {
  if (control instanceof FormGroup) {
  this.logControlsInsideFormGroup(control);}}}});}
  
  //on the below method we set the phone form control required or not based on the value passed on the contract preference form control
  onContactPrefernceChange(option:string){
  const ctrl =  this.employeeForm.get('phone');
  if(option === 'phone'){
  ctrl.setValidators(Validators.required);}
  else{
  ctrl.clearValidators();}
  ctrl.updateValueAndValidity();}









}
  
