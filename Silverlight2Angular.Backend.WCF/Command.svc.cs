using Silvelight2Angular.Framework;
using Silvelight2Angular.Framework.Data;

namespace Silverlight2Angular.Backend.WCF
{
    public class Command : ICommand
    {
        public BaseEntity GetData(int id)
        {
            using (Application application = new Application())
            {
                return application.GetData(id);
            }
        }

        public void Save(BaseEntity entity)
        {
            using (Application application = new Application())
            {
                application.Save(entity);
            }
        }

        public Page GetPage(int id)
        {
            using (Application application = new Application())
            {
                return application.GetPage(id);
            }
        }
    }
}
