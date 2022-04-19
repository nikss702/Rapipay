import agent from 'superagent';
import saUse from 'superagent-use';
import Cookies from 'js-cookie'
import { X } from 'react-feather'
import { toast } from 'react-toastify'
import { Fragment } from 'react'
import Avatar from '@components/avatar'

let _agent = saUse(agent);

window.addEventListener('offline', () => notifyBottomCenter("Interet got disconnected!"));

const InfoToast = ({title}) => (
  <Fragment>
    <div className='toastify-header'>
      <div className='title-wrapper'>
        <Avatar size='sm' color='danger' icon={<X size={12} />} />
        <h6 className='toast-title'>{title}</h6>
      </div>
    </div>
    <div className='toastify-body'>
      <span role='img' aria-label='toast-text'>
        Please, check your network or refresh your page and try to login again.
      </span>
    </div>
  </Fragment>
)

const notifyBottomCenter = (title) => toast.error(<InfoToast title={title} />, {
  position: toast.POSITION.BOTTOM_CENTER,
  hideProgressBar: true
})

export function superAgentMiddleware(_agent) {
  let Request = _agent.Request;
  let oldThen = Request.prototype.then;
  let oldEnd = Request.prototype.end;

  Request.prototype.end = function (fn) {
    function wrapped(err, response) {
      console.log({err, response})
      if (!response || [500, 400, 401, 403].includes(response && response.statusCode)) {
        window.localStorage.clear();
        notifyBottomCenter("Opps! something went wrong...")
        window.history.pushState({}, '', '/login');
        Cookies.remove('token');
      }
      fn(err, response);
    }
    return oldEnd.call(this, wrapped);
  };

  Request.prototype.then = function (fn) {
    function wrapped(response) {
      if (!response || [400, 401, 403].includes(response && response.statusCode)) {
        localStorage.clear();
        window.history.pushState({}, '', '/login');
        Cookies.remove('token');
      }
      fn(response);
    }
    return oldThen.call(this, wrapped);
  };
  return _agent;
}

let rawAgent = _agent.use(function (req) {
  req
    .set('Accept', 'application/json')
    .set('Access-Control-Allow-Origin', '*')
    .set('authorization', "Token " + getToken());
  return req;
})

export function getToken() {
  var token = "";
  var cookies = document.cookie.split("; ");
  for (var i = 0; i < cookies.length; i++) {
    var c = cookies[i];
    if (c.indexOf("token") === 0) {
      token = c.substring("token".length + 1, c.length);
    }
  }
  return token;
};

_agent = superAgentMiddleware(rawAgent);

export default _agent;