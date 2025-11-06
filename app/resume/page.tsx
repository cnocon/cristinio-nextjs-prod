export default function Page() {
  return (
    <div className={`grid grid-rows-2`}>
      <div className="grid grid-cols-2 gap-4">
        <div>First Column, Third Row</div>
        <div>Second Column, Third Row</div>
      </div>
      <div className="grid grid-cols-1 gap-4">
        <div>Only Column, Fourth Row</div>
      </div>
    </div>
  )
}
