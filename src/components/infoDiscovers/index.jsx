import { Container } from '@mui/material'
import s from './index.module.scss'
import { Link } from 'react-router-dom'
import { GetContext } from '../context';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';

export const InfoDicovers = ({ data }) => {
  // const { handleDelete } = GetContext();
  return (
    <div className={s.info}>
      <Container fixed>
        <table>
          <tbody>
            <tr>

              <td >
                <Link className={s.nameObject} to={`/extroInfo/${data.id}`}>{data.name}</Link>
              </td>
              <td>{data.visibility}</td>
              <td>{data.time}</td>
              <td>{data.magnitude}</td>
              <td>{data.constellation}</td>
              {/* <DeleteIcon className="icon" onClick={() => handleDelete(data.id)} />
              <Link to={`/change/${data.id}`}><BorderColorIcon className="icon" /></Link> */}
            </tr>
          </tbody>
        </table>

      </Container>
    </div >

  )
}
