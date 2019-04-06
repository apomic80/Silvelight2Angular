using Silvelight2Angular.Framework.Data;
using System.ServiceModel;

namespace Silverlight2Angular.Backend.WCF
{
    [ServiceContract]
    public interface ICommand
    {
        [ServiceKnownType(typeof(Utente))]
        [OperationContract]
        BaseEntity GetData(int id);

        [OperationContract]
        Page GetPage(int id);
    }
}
