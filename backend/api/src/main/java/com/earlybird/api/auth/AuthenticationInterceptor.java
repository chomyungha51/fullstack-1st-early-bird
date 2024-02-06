package com.earlybird.api.auth;

import com.earlybird.api.auth.domain.Account;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.web.servlet.HandlerInterceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

@Slf4j
public class AuthenticationInterceptor implements HandlerInterceptor {

    @Override
    public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException {
        if (isGetTicketListRequest(request)) {
            return true;
        }

        HttpSession session = request.getSession(false);
        if (session == null) {
            response.sendError(HttpStatus.UNAUTHORIZED.value());
            return false;
        }

        Account account = (Account) session.getAttribute("account");
        if (account == null) {
            response.sendError(HttpStatus.UNAUTHORIZED.value());
            return false;
        }

        return true;
    }

    private static boolean isGetTicketListRequest(HttpServletRequest request) {
        return "GET".equals(request.getMethod()) && "/api/tickets".equals(request.getRequestURI());
    }
}
