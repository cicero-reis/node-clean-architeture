export default interface ILoginPresentation<T> {
  login(body: T): Promise<T>
}
