import Spinner from "../components/Spinner";
import { useAuth } from "../context/AuthContext";
import { Navigate, Outlet } from 'react-router-dom';

function ProtectedRoute() {

  const { isAuthenticated, loading } = useAuth();
  console.log(loading, isAuthenticated);

  if (loading) return (<div>
    <h1>Loading...</h1>
    <Spinner />
  </div>);
  if (!loading && !isAuthenticated) return <Navigate to={'/login'} replace />

  return <Outlet />; // esto es para que siga con el componente que está dentro
}

export default ProtectedRoute