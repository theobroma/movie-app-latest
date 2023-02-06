import { ReactComponent as UserFemaleSVG } from '@/shared/images/user-female.svg';
import { ReactComponent as UserMaleSVG } from '@/shared/images/user-male.svg';
import { PERSON_IMG_BASE_URL } from '@/shared/utils/constants';

import { useStyles } from './cast-card.styles';

interface Props {
  profilePath: any;
  name: any;
  gender: any;
  role: any; // character or job
}

export const CastCard = ({ profilePath, name, gender, role }: Props) => {
  const { classes } = useStyles();

  return (
    <div className={classes.media}>
      {!!profilePath && (
        <img
          className={classes.mediaFigure}
          loading="lazy"
          src={`${PERSON_IMG_BASE_URL}/${profilePath}`}
          alt={name}
        />
      )}
      {!profilePath && (
        <div className={classes.mediaFigure}>
          {gender === 1 ? <UserFemaleSVG /> : <UserMaleSVG />}
        </div>
      )}
      <div className={classes.mediaBody}>
        <b>{name}</b>
        <br />
        {role}
      </div>
    </div>
  );
};
