export default function ({app, redirect}) {
    if (!app.$cookies.get("username")) {
      return redirect('http://localhost:3000/')
    }
  }