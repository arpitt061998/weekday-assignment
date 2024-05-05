const Header = () => {
  const options = ["Frontend","Backend","Tech Lead","Andriod"];
  const experienceRange = Array.from({ length: 10 }, (_, index) => index + 1);
  const location = ["Remote", "Hybrid", "In-office"];
  const salaryRange = [0,10,20,30,40,50,60,70,80,90];

  return (
    <div className="filter-wrapper d-flex">
      <div className="role-wrapper">
        <select>
          <option value="">Select an option...</option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="exp-wrapper">
        <select>
          <option value="">Experience</option>
          {experienceRange.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>  
      </div>
      <div className="location-wrapper">
        <select>
          <option value="">Remote</option>
          {location.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>  
      </div>
      <div className="minimun-base-salary-wrapper">
        <select>
          <option value="">Minimum Base Pay Salary </option>
          {salaryRange.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="search-wrapper">
        <input className="search" placeholder="Search Company Name"/>
      </div>
    </div>
  )
}

export default Header;