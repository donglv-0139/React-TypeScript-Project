import { Box, Button, Chip, PropTypes, TextField } from '@material-ui/core'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import React, { ChangeEvent, useContext, useState } from 'react'
import { MovieContext } from '../contexts/MovieContext'
import { ThemeContext } from '../contexts/ThemeContext'

const useStyles = makeStyles((theme: Theme) => createStyles({
  movieInput: {
    marginRight: '5px'
  },
  movieChip: {
    fontSize: '2rem',
    padding: '30px',
    margin: '5px'
  }
}))

const Movies = () => {
  //classes
  const classes = useStyles()

  // state
  const [movie, setMovie] = useState('')

  const onMovieInputChange = (event: ChangeEvent<HTMLInputElement>) => setMovie(event.target.value) 

  //context
  const {theme} = useContext(ThemeContext)
  const chipTheme = theme as Exclude<PropTypes.Color, 'inherit'>

  const {movies, addMovie, deleteMovie} = useContext(MovieContext)
  
  return (
    <>
      <Box display='flex' justifyContent='center' my={5}> 
        <TextField label='Your favorite movies...' variant='outlined' className={classes.movieInput} onChange={onMovieInputChange } value={movie}></TextField>
        <Button 
          variant='contained' 
          color='primary' 
          onClick={() =>{ 
            addMovie(movie)
            setMovie('')
          }}
        >
          Add
        </Button>
      </Box>

      <Box display='flex' justifyContent='center' flexWrap='wrap' mx={5}>
          {movies.map(movie => (
            <Chip key={movie.id} label={movie.title} clickable color={chipTheme} className={classes.movieChip} onDelete={() => deleteMovie(movie.id)} />
          ))}
      </Box>
    </>
  )
}

export default Movies