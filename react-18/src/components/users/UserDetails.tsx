//import { Suspense } from 'react';
//import { Loading } from '../Loading';
import { AccountDetails } from './AccountDetails';
import { MovieDetails } from './MovieDetails';

interface Props {
  userId: number;
  movieId: number;
  isPending: boolean;
}
// Multiple suspense boundaries can suspend in parallel


// ** note <SuspenseList /> will let you control how multiple <Suspense />
// components render their fallback

export function UserDetails({ userId, movieId, isPending }: Props) {
  return (
    <div>
        {/* <SuspenseList revealOrder="together"> */}
          <h4 className="text-center mt-5">User details</h4>
          {/* <Suspense fallback={<Loading />}> */}
            <AccountDetails userId={userId} /> 
          {/* </Suspense> */}
          <h4 className="text-center mt-5">Favorite movie</h4>
          {/* {/* <Suspense fallback={<Loading />}> */}
            <MovieDetails movieId={movieId} />
          {/* </Suspense> */}
        {/*</SuspenseList> */}
    </div>
  );
}
