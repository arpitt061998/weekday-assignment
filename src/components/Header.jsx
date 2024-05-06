import { useState } from "react";
import { useDispatch } from "react-redux";
import { addRoleFilter,addMinExp, addSearchedTitle, addLocation, addMinSalary } from "../utils/filtersSlice";

const Header = () => {
  const options = ["Frontend","Backend","Tech Lead","Android","Ios"];
  const experienceRange = Array.from({ length: 10 }, (_, index) => index + 1);
  const locationArr = ["Remote", "Hybrid", "In-office"];
  const salaryRange = [0,10,20,30,40,50,60,70,80,90];
  const [roleValue, setRoleValue] = useState("");
  const [minExpValue, setMinExpValue]= useState("");
  const [searchText, setSearchText] = useState("");
  const [location, setLocation] = useState("");
  const [minSalary, setMinSalary] = useState("");
  const dispatch = useDispatch();

  const handleOperations = (e) => {
    if(e.currentTarget.classList.contains("roles")){
      setRoleValue(e?.currentTarget?.value)
      dispatch(addRoleFilter(e?.currentTarget?.value));
    }
    else if(e.currentTarget.classList.contains("minexp")){
      setMinExpValue(e.currentTarget.value)
      dispatch(addMinExp(e?.currentTarget?.value));
    }
    else if(e.currentTarget.classList.contains("search")){
      setSearchText(e.currentTarget.value)
      dispatch(addSearchedTitle(e?.currentTarget?.value));
    }
    else if(e.currentTarget.classList.contains("location")){
      setLocation(e.currentTarget.value);
      dispatch(addLocation(e?.currentTarget?.value))
    }
    else if(e.currentTarget.classList.contains("min-salary")){
      setMinSalary(e.currentTarget.value);
      dispatch(addMinSalary(e?.currentTarget?.value));
    }
  }

  return (
    <div className="filter-wrapper d-flex">
      <div className="role-wrapper">
        <select className = "roles filters" value = {roleValue} onChange={handleOperations}>
          <option value="">Roles</option>
          {options.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="exp-wrapper">
        <select className = "minexp filters" value = {minExpValue} onChange={handleOperations}>
          <option value="">Experience</option>
          {experienceRange.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="location-wrapper">
        <select className = "location filters" value={location} onChange={handleOperations}>
          <option value="">Location</option>
          {locationArr.map(option => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      <div className="minimum-base-salary-wrapper">
        <select className = "min-salary filters" value = {minSalary} onChange={handleOperations}>
          <option value="">Minimum Base Pay Salary </option>
          {salaryRange.map(option => (
            <option key={option} value={option}>
              {option}L
            </option>
          ))}
        </select>
      </div>
      <div className="search-wrapper">
        <input value ={searchText} className="search filters" placeholder="Search Company Name" onChange = {handleOperations}/>
      </div>
    </div>
  )
}

export default Header;