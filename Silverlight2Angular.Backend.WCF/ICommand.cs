using Silvelight2Angular.Framework.Data;
using System.ServiceModel;

namespace Silverlight2Angular.Backend.WCF
{
    [ServiceContract]
    public interface ICommand
    {
        [OperationContract]
        BaseEntity GetData(int id);

        [OperationContract]
        void Save(BaseEntity entity);

        [OperationContract]
        Page GetPage(int id);
    }
}
