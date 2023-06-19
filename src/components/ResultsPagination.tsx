import { Pagination } from '@mui/material';

const ResultsPagination = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} sx={{ mb: 4 }}>
        <Pagination count={10} />
      </Grid>
    </Grid>
  )
};

export default ResultsPagination;