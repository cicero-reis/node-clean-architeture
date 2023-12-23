export default interface ILoginRepository<T> {
  login(body: T): Promise<T>
}
