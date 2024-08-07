/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as mui from "@mui/material";

const StyledTableCell = mui.styled(mui.TableCell)(({ theme }) => ({
  [`&.${mui.tableCellClasses.head}`]: {
    backgroundColor: "#1976D2",
    color: theme.palette.common.white,
    
  },
  [`&.${mui.tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = mui.styled(mui.TableRow)(({ theme }) => ({
  '&:nth-of-type(even)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const WorkoutPlan = ({ plan }) => {
  return (
    <div className=" flex items-center justify-center shadow-xl">
      <mui.TableContainer component={mui.Paper}>
        <mui.Table
          sx={{ minWidth: 650,}}
          
          size="small"
          aria-label="a dense table"
        >
          <mui.TableHead className=" bg-frenchBlue">
            <mui.TableRow className=" ">
              <StyledTableCell className="text-white font-bold text-xl">Day</StyledTableCell>
              <StyledTableCell >Exercise Name</StyledTableCell>
              <StyledTableCell align="right" >Sets</StyledTableCell>
              <StyledTableCell align="right">Reps</StyledTableCell>
              <StyledTableCell align="right">Rest</StyledTableCell>
            </mui.TableRow>
          </mui.TableHead>
          <mui.TableBody>
            {Object.entries(plan).map(([day, exercises], dayIndex) =>
              exercises.Exercise1 === "Rest" ? (
                <StyledTableRow key={dayIndex}>
                  <mui.TableCell>{day}</mui.TableCell>
                  <mui.TableCell colSpan={4} align="center">
                    Rest
                  </mui.TableCell>
                </StyledTableRow>
              ) : (
                Object.entries(exercises).map(
                  (
                    [exerciseKey, { ExerciseName, Sets, Reps, Rest }],
                    exerciseIndex
                  ) => (
                    <StyledTableRow key={`${dayIndex}-${exerciseIndex}`}>
                      {exerciseIndex === 0 && (
                        <mui.TableCell rowSpan={Object.keys(exercises).length}>
                          {day}
                        </mui.TableCell>
                      )}
                      <mui.TableCell>{ExerciseName}</mui.TableCell>
                      <mui.TableCell align="right">{Sets}</mui.TableCell>
                      <mui.TableCell align="right">{Reps}</mui.TableCell>
                      <mui.TableCell align="right">{Rest}</mui.TableCell>
                    </StyledTableRow>
                  )
                )
              )
            )}
          </mui.TableBody>
        </mui.Table>
      </mui.TableContainer>
    </div>
  );
};

export default WorkoutPlan;
