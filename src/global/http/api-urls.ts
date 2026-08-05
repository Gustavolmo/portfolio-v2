class ApiUrls {
  private readonly origin =
    window.location.hostname === 'localhost' ? 'http://localhost:8080' : 'https://portfolio-v2-api-9kpk.onrender.com'

  readonly health = `${this.origin}/health`
  readonly observe = `${this.origin}/observe`
  readonly email = `${this.origin}/email`
}

export const apiUrls = new ApiUrls()
