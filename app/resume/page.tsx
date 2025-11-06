import data from "../lib/resume-data"

export default function Resume() {
  return <>
    <h1>Resume Page</h1>
    <p>{`${Object.keys(data)}`}</p>
  </>
}
