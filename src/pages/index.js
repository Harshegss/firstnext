import { Inter } from 'next/font/google'
import '../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-4'>
            <form class="form">
              <p>Login</p>
              <div class="group">
                <input required="true" class="main-input" type="text" />
                <span class="highlight-span"></span>
                <label class="lebal-email">Email</label>
              </div>
              <div class="container-1">
                <div class="group">
                  <input required="true" class="main-input" type="text" />
                  <span class="highlight-span"></span>
                  <label class="lebal-email">password</label>
                </div>
              </div>
              <button class="submit">submit</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
