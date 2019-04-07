using Silvelight2Angular.Framework;
using Silvelight2Angular.Framework.Data;
using System.Web.Http;
using System.Xml.Linq;

namespace Silverlight2Angular.Backend.MVC.Controllers
{
    [RoutePrefix("api/Command")]
    public class CommandController : ApiController
    {
        [HttpGet]
        [Route("GetData/{id}")]
        public IHttpActionResult GetData(int id)
        {
            using (Application application = new Application())
            {
                return Ok(application.GetData(id));
            }
        }

        [HttpGet]
        [Route("GetPage/{id}")]
        public IHttpActionResult GetPage(int id)
        {
            using (Application application = new Application())
            {
                var result = application.GetPage(id);
                if (result == null) return NotFound();

                var page = XDocument.Parse(result.XAML);
                return Ok(page);
            }
        }

        [HttpPost]
        [Route("Save")]
        public void Save([FromBody]BaseEntity entity)
        {
            using (Application application = new Application())
            {
                application.Save(entity);
            }
        }
    }
}
