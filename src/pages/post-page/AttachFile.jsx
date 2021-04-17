/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import { DropzoneArea } from 'material-ui-dropzone';
import Grid from '@material-ui/core/Grid';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(() =>
  createStyles({
    previewChip: {
      minWidth: 120,
      maxWidth: 180
    }
  })
);

const AttachFile = () => {
  const classes = useStyles();
  return (
    <Grid item xs="12">
      <Typography gutterBottom="true">Attach Files</Typography>
      <DropzoneArea
        showPreviews
        showPreviewsInDropzone={false}
        useChipsForPreview
        previewGridProps={{ container: { spacing: 1, direction: 'row' } }}
        previewChipProps={{ classes: { root: classes.previewChip } }}
        previewText="Selected files"
      />
    </Grid>
  );
};

export default AttachFile;
