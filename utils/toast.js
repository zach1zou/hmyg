function toast(title, icon, duration) {
  uni.showToast({
    title,
    icon: 'none',
    duration
  })
}
toast.err = function(title, duration = 3000) {
  uni.showToast({
    title,
    icon: 'error',
    duration
  })
}
export default toast
