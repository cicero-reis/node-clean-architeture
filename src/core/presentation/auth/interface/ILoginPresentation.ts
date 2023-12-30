export default interface ILoginPresentation<T1, T2> {
  login(body: T1): Promise<T2 | boolean>
}
