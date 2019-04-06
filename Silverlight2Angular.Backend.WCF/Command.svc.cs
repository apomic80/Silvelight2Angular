using Silvelight2Angular.Framework;
using Silvelight2Angular.Framework.Data;

namespace Silverlight2Angular.Backend.WCF
{
    public class Command : ICommand
    {
        private static Application application = new Application();

        public BaseEntity GetData(int id)
        {
            return application.GetData(id);
        }

        public Page GetPage(int id)
        {
            return application.GetPage(id);
        }

    }
}
