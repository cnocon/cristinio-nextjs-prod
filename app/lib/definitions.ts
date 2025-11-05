export type Courses = Course[]
export type Course = {
  title: String,
  url: String,
  platform: String,
  instructor: null | String,
  completedDate: Date,
  certificateUrl: String,
  description: String,
  imageUrl: String
}

export type Honor = {
  name: String,
  detail: String
}
export type Honors = Honor[]

export type EducationItem = {
  title: String,
  school: String,
  schoolUrl: String,
  location: String,
  startDate: Date,
  endDate: Date,
  honors: Honors
}
export type Education = EducationItem[]

export type TechSkill = {
  label: String,
  proficiencyPercentage: 90
}
export type TechSkills = TechSkill[]

export type SoftSkill = String
export type SoftSkills = SoftSkill[]

export type Job = {
  year: Date,
  title: String,
  location: String,
  company: String,
  startDate: Date,
  endDate: Date,
  companyUrl: String,
  responsibilities: String[]
}
export type Jobs = Job[]

export interface IData {
  courses: Courses,
  honors: Honors,
  education: Education,
  techSkills: TechSkills,
  softSkills: SoftSkills,
  jobs: Jobs
}
