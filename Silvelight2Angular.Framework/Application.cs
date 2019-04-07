using Silvelight2Angular.Framework.Data;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Silvelight2Angular.Framework
{
    public class Application : IDisposable
    {
        private readonly Silverlight2AngularModelContainer container = null;

        public Application()
        {
            this.container = new Silverlight2AngularModelContainer();
        }

        public BaseEntity GetData(int id)
        {
            var result = this.container.BaseEntities
                .SingleOrDefault(x => x.Id == id);

            return result;
        }

        public void Save(BaseEntity entity)
        {
            this.container.BaseEntities.Attach(entity);
            this.container.Entry(entity).State = 
                entity.Id == 0 ? EntityState.Added : EntityState.Modified;

            this.container.SaveChanges();
        }

        public Page GetPage(int id)
        {
            return this.container.Pages
                .SingleOrDefault(x => x.Id == id);
        }


        public void Dispose()
        {
            if (this.container != null)
                this.container.Dispose();
        }
    }
}
