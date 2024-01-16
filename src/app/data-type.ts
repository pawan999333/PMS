export interface signUp{
    name:string,
    password:string,
    email:string
}

export interface login{
    email:string,
    password:string
}

export interface product{
    name:string,
    price:number,
    category:string,
    description:string,
    color:string,
    image:string,
    id:number
}



export interface attendance{
    date:string,
    description:string,
    id:number
}

export interface leave{
    id:number,
    "employee_code":string,
    "employee_name":string,
    "From":string,
    "To":string,
    "Days":string,
    "Type":string,
    "Leave_time":string,
    "Description":string,
    "Status":string,
}

export interface myAttendanceList{
    id:number,
    month:number,
    year:number,
    total_working_days:number,
    present_days:number,
    leave:number,
    extra_working_days:number,
    carry_over:number,
    earned_leave:number,
    late_leave:number
}

export interface dashboard{
    id:number,
    query_type:string,
    type:string,
    query:string,
    priority:string,
    status:string,
    last_comment:string,
    assigned_at:string,
    action:string
}

export interface profile{
    id:number;
    employee:string;
    employee_code:string;
    joining_data:string;
    designation:string;
    date_relived:string;
    personal_email:string;
    mobile_number:string;
    alternate_mobile_number:string;
    pan_card_number:string;
    aadhar_card_number:string;
    date_of_birth:string;
    father_name:string;
    mother_name:string;
    higher_education:string;
}


export interface myAttendance{
    id:number;
    date:string;
    day:string;
    in_time:string;
    out_time:string;
    status:string;
    time:string;
    action:string;

}

export interface timeSetting{
    id:number;
    employee_code:string;
    employee_name:string;
    start_date:string;
    end_date:string;
    time:string;
    action:string;

}


export interface employee {
  id: number;
  employee_code: string;
  employee_name: string;
  joining_date:string;
  designation:string;
  access_code:string;
  action:string;

}


export interface allAttandance {
  id: number;
  employee_code: string;
  employee_name: string;
  date:string;
  day:string;
  in_time:string;
  out_time:string;
  status:string;
  time:string;
  action:string;
}

export interface attendanceSummary {
  id: number;
  employee_code: string;
  name: string;
  month: string;
  year: string;
  total_working_days: string;
  present_days: string;
  leave: string;
  extra_working_days: string;
  carry_over: string;
  earned_leave: string;
  late_leave: string;
  total_leave: string;
  balanced_leave: string;
  holiday:string;
  status:string;
  action:string;
}