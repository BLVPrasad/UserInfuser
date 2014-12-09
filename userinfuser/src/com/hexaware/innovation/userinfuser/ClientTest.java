package com.hexaware.innovation.userinfuser;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import net.sf.json.JSONArray;


/**
 * Servlet implementation class ClientTest
 */
public class ClientTest extends HttpServlet {
	private static final long serialVersionUID = 1L;
	
	private final static String ACCOUNT_ID = "prashaad@gmail.com";
	private final static String API_KEY = "2c1b39cf-4705-456d-bfed-b9899c77f843";
	
	private static UserInfuser f_userInfuserModule;
	
	/**
     * @see HttpServlet#HttpServlet()
     */
    public ClientTest() {
        super();
        // TODO Auto-generated constructor stub
        System.out.println("==================  ClientTest  invoked    ============");
        
        
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		PrintWriter out = null;
		
		JSONArray object = null;
		
		String result = null;
		
		try {
			System.out.println("==================  doPost  invoked    ============");
			
			String service = request.getParameter("ws");
			String userId = request.getParameter("userId");
				
			f_userInfuserModule = new UserInfuser(ACCOUNT_ID, API_KEY, false, false, false, true);
			
			if (null != request.getParameter("ws")
					&& request.getParameter("ws").equalsIgnoreCase("createUser")) {
				if (null != request.getParameter("userId")){
					
					String name = request.getParameter("name");
					String url = request.getParameter("url");
					String image = request.getParameter("image");
					//result = f_userInfuserModule.updateUser(userId);
					//result = f_userInfuserModule.updateUser("prashaad@gmail.com", "BLVPrasad", "http://172.25.129.88:7080/WebUserInfuser", "http://172.25.129.88:7080/WebUserInfuser/images/Prasad.jpg");
					result = f_userInfuserModule.updateUser(userId, name, url, image);
					System.out.println("createUser **************  : "+result);
				}
			}
			
			else if (null != request.getParameter("ws")
					&& request.getParameter("ws").equalsIgnoreCase("givePoints")) {
				if (null != request.getParameter("userId")){
					String pointsStr = request.getParameter("points");
					int points = Integer.parseInt(pointsStr);
					result = f_userInfuserModule.awardPoints(userId, points );
					System.out.println("Points given **************  : "+result);
				}
			}
			
			else if (null != request.getParameter("ws")
					&& request.getParameter("ws").equalsIgnoreCase("createBadge")) {
				if (null != request.getParameter("userId")){
					System.out.println("inside create badge");
					String userId1 = request.getParameter("userId");
					String badgeId = request.getParameter("badgeId");
					result = f_userInfuserModule.awardBadge(userId1, badgeId);
					System.out.println("createBadge **************  : "+result);
				}
			}
			
			else if (null != request.getParameter("ws")
					&& request.getParameter("ws").equalsIgnoreCase("removeBadge")) {
				if (null != request.getParameter("userId")){
					String badgeId = request.getParameter("badgeId");
					result = f_userInfuserModule.removeBadge(userId, badgeId);
					System.out.println("removeBadge **************  : "+result);
				}
			}
			
			else if (null != request.getParameter("ws")
					&& request.getParameter("ws").equalsIgnoreCase("userInfo")) {
				if (null != request.getParameter("userId")){
					System.out.println("userId **************  : "+userId);
					result = f_userInfuserModule.getUserInfo(userId);
					System.out.println("userInfo **************  : "+result);
				}
			}
			
			
			else if (null != request.getParameter("ws")
					&& request.getParameter("ws").equalsIgnoreCase("Trophies")) {
				if (null != request.getParameter("userId")){
					System.out.println("userId **************  : "+userId);
					result = f_userInfuserModule.getWidget(userId, WidgetType.TROPHY_CASE);
					System.out.println("TROPHY_CASE **************  : "+result);
				}
			}
			
			else if (null != request.getParameter("ws")
					&& request.getParameter("ws").equalsIgnoreCase("Rank")) {
				if (null != request.getParameter("userId")){
					System.out.println("userId **************  : "+userId);
					result = f_userInfuserModule.getWidget(userId, WidgetType.RANK);
					System.out.println("RANK   **************  : "+result);
				}
			}
			
			else if (null != request.getParameter("ws")
					&& request.getParameter("ws").equalsIgnoreCase("Points")) {
				if (null != request.getParameter("userId")){
					System.out.println("userId **************  : "+userId);
					result = f_userInfuserModule.getWidget(userId, WidgetType.POINTS);
					System.out.println("POINTS   **************  : "+result);
				}
			}
			
			else if (null != request.getParameter("ws")
					&& request.getParameter("ws").equalsIgnoreCase("Notifier")) {
				if (null != request.getParameter("userId")){
					System.out.println("userId **************  : "+userId);
					result = f_userInfuserModule.getWidget(userId, WidgetType.NOTIFIER);
					System.out.println("NOTIFIER   **************  : "+result);
				}
			}
			
			else if (null != request.getParameter("ws")
					&& request.getParameter("ws").equalsIgnoreCase("LeaderBoard")) {
				if (null != request.getParameter("userId")){
					System.out.println("userId **************  : "+userId);
					result = f_userInfuserModule.getWidget(userId, WidgetType.LEADERBOARD);
					System.out.println("Leader Board  **************  : "+result);
				}
			}
			
			else if (null != request.getParameter("ws")
					&& request.getParameter("ws").equalsIgnoreCase("MileStones")) {
				if (null != request.getParameter("userId")){
					System.out.println("userId **************  : "+userId);
					result = f_userInfuserModule.getWidget(userId, WidgetType.MILESTONES);
					System.out.println("MILESTONES   **************  : "+result);
				}
			}
			
			else if (null != request.getParameter("ws")
					&& request.getParameter("ws").equalsIgnoreCase("viewBadges")) {
				if (null != request.getParameter("userId")){
					System.out.println("userId **************  : "+userId);
					result = f_userInfuserModule.getWidget(userId, WidgetType.AVAILABLE_BADGES);
					System.out.println("AVAILABLE_BADGES  **************  : "+result);
				}
			}
			
		boolean scriptTag = false;
		String cb = request.getParameter("callback");

		//System.out.println("callback"+cb);
		if (cb.equals("callback")) {
			scriptTag = false;
			response.setContentType("text/javascript");
		}
		else {
			scriptTag = true;
			response.setContentType("application/x-json");
		}
		
		out = response.getWriter();
		if (scriptTag) {
			out.write(cb + "(");
		}
		
		out.print(result);
		if (scriptTag) {
			out.write(");");
		}

		out.flush();
		//System.out.println(object);

		} catch (Exception e) {
			e.printStackTrace();
		}
		
	}
}
