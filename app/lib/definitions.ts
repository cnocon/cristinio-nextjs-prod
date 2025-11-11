export type Breadcrumb = {
  name: string,
  href: string,
  current: boolean
}

export type Courses = Course[]
export type Course = {
  title: string,
  url: string,
  platform: string,
  instructor: null | string,
  completedDate: Date,
  certificateUrl: string,
  description: string,
  imageUrl: string
}

export type Honor = {
  name: string,
  detail: string
}
export type Honors = Honor[]

export type EducationItem = {
  title: string,
  school: string,
  schoolUrl: string,
  location: string,
  startDate: Date,
  endDate: Date,
  honors: Honors
}
export type Education = EducationItem[]

export type TechSkill = {
  label: string,
  proficiencyPercentage: number
}
export type TechSkills = TechSkill[]

export type SoftSkill = string
export type SoftSkills = SoftSkill[]

export type Job = {
  year: Date,
  title: string,
  location: string,
  company: string,
  startDate: Date,
  endDate: Date,
  companyUrl: string,
  responsibilities: string[]
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
